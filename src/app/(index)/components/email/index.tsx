"use client";
import sendEmail from "@/actions/send-email";
import React, { useActionState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

function EmailForm({ onEmailToggle }: { onEmailToggle: () => void }) {
  const [actionState, formAction, isPending] = useActionState(sendEmail, null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    // 이메일 전송 완료 상태 감지
    if (actionState && actionState.message === "success") {
      alert("이메일이 성공적으로 전송되었습니다!");
      onEmailToggle(); // 모달 닫기
    }
  }, [actionState, onEmailToggle]);

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] bg-black bg-opacity-50 fixed left-0 top-0 z-[100]"
        onClick={onEmailToggle}
      ></div>
      <div className="fixed z-[200] w-[400px] h-[600px] max-md:w-[300px] max-md:h-[400px] bg-white left-1/2 top-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2 p-5 flex">
        <form action={formAction} className="flex-1">
          <div className="flex flex-col gap-4 h-full">
            <div className="font-thin text-2xl text-center">이메일 보내기</div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs">
                Sender Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="이름을 입력하세요"
                required
                className="border-b-[1px] pl-1"
              />
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs">
                  Sender Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="이메일을 입력하세요"
                  className="border-b-[1px] pl-1"
                  required
                />
              </div>
            </div>
            <div className="flex flex-1">
              <div className="flex flex-1 flex-col gap-2">
                <label htmlFor="name" className="text-xs">
                  description
                </label>
                <textarea
                  placeholder="내용을 입력하세요"
                  id="subject"
                  name="subject"
                  className="resize-none h-full"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <button type="submit" className="w-full bg-black p-1 text-white">
                전송
              </button>
              <button
                onClick={onEmailToggle}
                className="w-full border-[1px] p-1 "
              >
                닫기
              </button>
            </div>
            {isPending && (
              <div className="absolute left-1/2 top-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2  flex flex-col items-center">
                <div>
                  <ScaleLoader />
                </div>
                <div>이메일 전송중 입니다..</div>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default EmailForm;
